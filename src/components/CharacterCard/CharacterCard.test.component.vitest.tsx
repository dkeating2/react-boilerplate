import CharacterCard from "./CharacterCard.tsx";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Character } from "../../types/character.types.ts";
import { setupComponentTest } from "../../test/utils/setupComponentTest.tsx";

const mockCharacter = {
  name: {
    first: "John",
    middle: "A",
    last: "Zoidberg",
  },
  images: {
    "head-shot": "",
    main: "https://static.wikia.nocookie.net/enfuturama/images/4/4a/Dr_John_Zoidberg.png",
  },
  age: "40",
  gender: "Male",
  species: "Decapodian",
  occupation: "Staff doctor",
  sayings: [
    "My name isn't Slick, it's Zoidberg. John fucking Zoidberg!!",
    "In my experience, boxes are usually empty, sometimes with a little cheese stuck to the top, and one time pepperoni, what a day that was!",
    "The female Leela's problem is purely medical, soon she will lay her eggs and they will hatch and all will be well.",
    "Fry, it's been years since medical school, so remind me. Disemboweling in your species: fatal, or non-fatal?",
    "Friends, help! A guinea pig tricked me!",
    "I saw a frilly cake in here you would remember all your life. I know I will. Late at night it haunts me with its frosty beauty. [shouting] Order the cake, dammit!!",
    "Look, coupons! I can get two oil changes for the price of one. Now, if I could only afford the one... and the car. Ah, the years! So many memories, so many strange fluids gushing out of patients' bodies.",
    "Switch bodies? I don't see why not. I also don't see why.",
  ],
  id: 8,
};

describe("CharacterCard", () => {
  beforeEach(() => {
    setupComponentTest(
      <CharacterCard character={mockCharacter as Character} />,
      {},
    );
  });

  afterEach(() => {
    cleanup();
  });

  // it("should navigate to character details page on click", () => {
  //   fireEvent.click(
  //     screen.getByText(
  //       `${mockCharacter.name.first} ${mockCharacter.name.last}`,
  //     ),
  //   );
  //   //   check that the URL has changed to "characters/8"
  //   expect(window.location.pathname).toBe(`/characters/${mockCharacter.id}`);
  // });

  it("should display character name", () => {
    const characterName = `${mockCharacter.name.first} ${mockCharacter.name.last}`;
    expect(screen.getByText(characterName)).toBeInTheDocument();
  });

  it("should display character image", () => {
    const characterImage = screen.getByAltText("character");
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute("src", mockCharacter.images.main);
  });
});
