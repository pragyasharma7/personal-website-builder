// LexicalTextarea.test.js

import { render, fireEvent } from "@testing-library/react";
import LexicalTextarea from "./LexicalTextarea";

describe("LexicalTextarea component", () => {
  test("renders with placeholder", () => {
    const placeholderText = "Enter text here";
    const { getByPlaceholderText } = render(
      <LexicalTextarea placeholder={placeholderText} />
    );
    const placeholderElement = getByPlaceholderText(placeholderText);
    expect(placeholderElement).toBeInTheDocument();
  });

  test("calls onChange callback when text is entered", () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <LexicalTextarea isCompEditable={true} onChange={onChangeMock} />
    );
    const editorInput = getByRole("textbox");
    const newText = "New text";
    fireEvent.change(editorInput, { target: { value: newText } });
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
  });

  // Add more test cases as needed
});
