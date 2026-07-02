import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Display, Heading, Text, Link, Label } from "./typography";
import { axe } from "jest-axe";

describe("Typography Component Set", () => {
  describe("Display", () => {
    it("should render h1 by default", () => {
      render(<Display>Display Text</Display>);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe("H1");
    });

    it("should support polymorphic rendering via asChild", () => {
      render(
        <Display asChild>
          <h2>Display h2</h2>
        </Display>
      );
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe("H2");
    });
  });

  describe("Heading", () => {
    it("should render correct heading tags based on level parameter", () => {
      const { rerender } = render(<Heading level="h3">Heading 3</Heading>);
      expect(screen.getByRole("heading", { level: 3 }).tagName).toBe("H3");

      rerender(<Heading level="h5">Heading 5</Heading>);
      expect(screen.getByRole("heading", { level: 5 }).tagName).toBe("H5");
    });
  });

  describe("Text", () => {
    it("should render as a paragraph element", () => {
      render(<Text>Paragraph content</Text>);
      const p = screen.getByText("Paragraph content");
      expect(p.tagName).toBe("P");
    });
  });

  describe("Link", () => {
    it("should render an anchor tag with href", () => {
      render(<Link href="https://railverse.in">Railverse Website</Link>);
      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://railverse.in");
    });
  });

  describe("Label", () => {
    it("should render a label tag linked to input controls", () => {
      render(
        <>
          <Label htmlFor="input-id">Username</Label>
          <input id="input-id" />
        </>
      );
      const label = screen.getByText("Username");
      expect(label.tagName).toBe("LABEL");
      expect(label).toHaveAttribute("for", "input-id");
    });

    it("should apply custom error class status", () => {
      render(<Label error>Email</Label>);
      const label = screen.getByText("Email");
      expect(label).toHaveClass("text-destructive");
    });
  });

  describe("Accessibility", () => {
    it("should have no accessibility violations for text scale components", async () => {
      const { container } = render(
        <main>
          <Display>Header text</Display>
          <Heading level="h2">Subheader text</Heading>
          <Text>Regular paragraph content text</Text>
          <Link href="https://railverse.in">Link anchor</Link>
        </main>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
