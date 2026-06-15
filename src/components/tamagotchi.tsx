"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Retro 8x8 sprite frames (0 = empty, 1 = filled)
const SPRITE_ALIVE_1 = [
  "00111100",
  "01111110",
  "11011011",
  "11111111",
  "11100111",
  "11111111",
  "01100110",
  "01000010",
].map((row) => row.split(""));

const SPRITE_ALIVE_2 = [
  "00000000",
  "00111100",
  "01111110",
  "11011011",
  "11111111",
  "11100111",
  "01111110",
  "01000010",
].map((row) => row.split(""));

const SPRITE_DEAD = [
  "00000000",
  "00000000",
  "01000010",
  "00100100",
  "00011000",
  "00100100",
  "01000010",
  "00000000",
].map((row) => row.split(""));

const SPRITE_ASLEEP = [
  "00111100",
  "01111110",
  "11111111",
  "11111111",
  "11100111",
  "11111111",
  "01100110",
  "01000010",
].map((row) => row.split(""));

// Stats decay rates (points per minute)
const DECAY_RATE_HUNGER = 1;
const DECAY_RATE_HAPPINESS = 1.5;
const DECAY_RATE_ENERGY = 0.5;

interface PetState {
  hunger: number;
  happiness: number;
  energy: number;
  isSleeping: boolean;
  lastUpdated: number;
  isAlive: boolean;
}

const INITIAL_STATE: PetState = {
  hunger: 100,
  happiness: 100,
  energy: 100,
  isSleeping: false,
  lastUpdated: Date.now(),
  isAlive: true,
};

export function Tamagotchi() {
  const [state, setState] = useState<PetState | null>(null);
  const [frame, setFrame] = useState(0);

  // Load from local storage on mount and calculate decay
  useEffect(() => {
    const saved = localStorage.getItem("tamagotchiState");
    let currentState = saved ? JSON.parse(saved) : INITIAL_STATE;

    if (currentState.isAlive) {
      const now = Date.now();
      const minutesPassed = (now - currentState.lastUpdated) / (1000 * 60);

      const hungerDecay = currentState.isSleeping ? DECAY_RATE_HUNGER * 0.2 : DECAY_RATE_HUNGER;
      const happinessDecay = currentState.isSleeping ? 0 : DECAY_RATE_HAPPINESS;
      
      const newHunger = Math.max(0, currentState.hunger - minutesPassed * hungerDecay);
      const newHappiness = Math.max(0, currentState.happiness - minutesPassed * happinessDecay);
      
      let newEnergy = currentState.energy;
      if (currentState.isSleeping) {
        newEnergy = Math.min(100, currentState.energy + minutesPassed * 5); // Regenerates quickly while sleeping
        if (newEnergy === 100) currentState.isSleeping = false; // Wake up if fully rested
      } else {
        newEnergy = Math.max(0, currentState.energy - minutesPassed * DECAY_RATE_ENERGY);
      }

      const isAlive = newHunger > 0; // Pet dies if hunger hits 0

      currentState = {
        ...currentState,
        hunger: newHunger,
        happiness: newHappiness,
        energy: newEnergy,
        isAlive,
        lastUpdated: now,
      };
    }

    setState(currentState);
  }, []);

  // Save to local storage whenever state changes
  useEffect(() => {
    if (state) {
      localStorage.setItem("tamagotchiState", JSON.stringify(state));
    }
  }, [state]);

  // Game loop (tick every second)
  useEffect(() => {
    if (!state || !state.isAlive) return;

    const interval = setInterval(() => {
      setState((prev) => {
        if (!prev) return prev;
        
        let { hunger, happiness, energy, isSleeping, isAlive } = prev;

        const hungerDecay = isSleeping ? DECAY_RATE_HUNGER * 0.2 : DECAY_RATE_HUNGER;
        const happinessDecay = isSleeping ? 0 : DECAY_RATE_HAPPINESS;
      
        hunger = Math.max(0, hunger - hungerDecay / 60);
        happiness = Math.max(0, happiness - happinessDecay / 60);
        
        if (isSleeping) {
          energy = Math.min(100, energy + 5 / 60);
          if (energy >= 100) isSleeping = false;
        } else {
          energy = Math.max(0, energy - DECAY_RATE_ENERGY / 60);
        }

        if (hunger === 0) isAlive = false;

        return {
          hunger,
          happiness,
          energy,
          isSleeping,
          isAlive,
          lastUpdated: Date.now(),
        };
      });

      // Animate frame
      setFrame((f) => (f === 0 ? 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [state?.isAlive]);

  const feed = () => {
    if (state?.isAlive && !state.isSleeping) {
      setState((s) => s ? { ...s, hunger: Math.min(100, s.hunger + 15), lastUpdated: Date.now() } : s);
    }
  };

  const play = () => {
    if (state?.isAlive && !state.isSleeping) {
      setState((s) => s ? { 
        ...s, 
        happiness: Math.min(100, s.happiness + 20), 
        energy: Math.max(0, s.energy - 10),
        lastUpdated: Date.now() 
      } : s);
    }
  };

  const toggleSleep = () => {
    if (state?.isAlive) {
      setState((s) => s ? { ...s, isSleeping: !s.isSleeping, lastUpdated: Date.now() } : s);
    }
  };

  const revive = () => {
    setState({ ...INITIAL_STATE, lastUpdated: Date.now() });
  };

  if (!state) return null; // Wait for mount

  const currentSprite = !state.isAlive 
    ? SPRITE_DEAD 
    : state.isSleeping 
      ? SPRITE_ASLEEP 
      : frame === 0 ? SPRITE_ALIVE_1 : SPRITE_ALIVE_2;

  const getStatusColor = (val: number) => {
    if (val > 60) return "bg-green-500";
    if (val > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 max-w-sm mx-auto">
      <div className="bg-slate-300 dark:bg-slate-800 p-8 rounded-3xl shadow-xl border-4 border-slate-400 dark:border-slate-700">
        
        {/* Pixel Screen */}
        <div className="bg-[#9bbc0f] w-64 h-64 border-4 border-slate-500 shadow-inner rounded p-4 flex flex-col justify-center items-center overflow-hidden relative">
          <div className="grid grid-rows-8 gap-0 border border-[#8bac0f] opacity-80" style={{ width: 'fit-content' }}>
            {currentSprite.map((row, y) => (
              <div key={y} className="flex">
                {row.map((pixel, x) => (
                  <div 
                    key={x} 
                    className={`w-6 h-6 ${pixel === "1" ? "bg-[#0f380f]" : "bg-transparent"}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {state.isSleeping && state.isAlive && (
            <div className="absolute top-8 right-12 text-[#0f380f] font-mono text-xl animate-pulse">
              Zzz
            </div>
          )}

          {!state.isAlive && (
            <div className="absolute font-mono bg-[#9bbc0f] text-[#0f380f] top-4 border-2 border-[#0f380f] p-1 font-bold">
              GAME OVER
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-16 h-16 rounded-full border-b-4 bg-slate-200 dark:bg-slate-600 text-2xl"
            onClick={feed}
            disabled={!state.isAlive || state.isSleeping}
          >
            🍕
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-16 h-16 rounded-full border-b-4 bg-slate-200 dark:bg-slate-600 text-2xl"
            onClick={play}
            disabled={!state.isAlive || state.isSleeping}
          >
            ⚽
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-16 h-16 rounded-full border-b-4 bg-slate-200 dark:bg-slate-600 text-2xl"
            onClick={toggleSleep}
            disabled={!state.isAlive}
          >
            💤
          </Button>
        </div>
      </div>

      {/* Stats UI */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 p-6 rounded-xl space-y-4">
        <h3 className="font-bold text-lg border-b pb-2">Status</h3>
        
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Hunger</span>
            <span>{Math.round(state.hunger)}%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
            <div className={`h-full ${getStatusColor(state.hunger)}`} style={{ width: `${state.hunger}%` }} />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Happiness</span>
            <span>{Math.round(state.happiness)}%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
            <div className={`h-full ${getStatusColor(state.happiness)}`} style={{ width: `${state.happiness}%` }} />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Energy</span>
            <span>{Math.round(state.energy)}%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
            <div className={`h-full ${getStatusColor(state.energy)}`} style={{ width: `${state.energy}%` }} />
          </div>
        </div>

        {!state.isAlive && (
          <Button className="w-full mt-4" variant="destructive" onClick={revive}>
            Restart Game
          </Button>
        )}
      </div>
    </div>
  );
}
