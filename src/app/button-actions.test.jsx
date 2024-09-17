import "@testing-library/jest-dom";

import { fireEvent,render, screen } from "@testing-library/react";

import { useQuizProgress } from "@/lib/hooks/useQuizProgress";

import { ButtonActions } from "./button-actions";

jest.mock("@/lib/hooks/useQuizProgress", () => ({
  useQuizProgress: jest.fn(),
}));

describe("ButtonActions", () => {
  const mockQuizProgress = {
    hasProgress: false,
    loading: false,
    resetProgress: jest.fn(),
    hasMistakes: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    useQuizProgress.mockReturnValue(mockQuizProgress);
  });

  describe("Loading State", () => {
    it("renders loading spinner when loading is true", () => {
      useQuizProgress.mockReturnValueOnce({ ...mockQuizProgress, loading: true });
      
      render(<ButtonActions />);  // Re-render with loading state
      
      expect(screen.getByText("Loading...")).toBeInTheDocument();
      expect(screen.queryByRole("button")).toBeNull();  // No buttons should appear
    });
  });

  describe("Quiz Progress States", () => {
    it("renders Start Quiz button and Randomized Quiz button when no progress", () => {
      render(<ButtonActions />);  // Render with default mock state
      
      expect(screen.getByRole("link", { name: /Start Quiz/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /Start Randomized Quiz/i })).toBeInTheDocument();
    });

    it("renders Resume Quiz button when progress exists", () => {
      useQuizProgress.mockReturnValueOnce({ ...mockQuizProgress, hasProgress: true });
      
      render(<ButtonActions />);  // Re-render with progress state
      
      expect(screen.getByRole("link", { name: /Resume Quiz/i })).toBeInTheDocument();
    });

    it("renders Practice Mistakes button when mistakes exist", () => {
      useQuizProgress.mockReturnValueOnce({
        ...mockQuizProgress,
        hasProgress: true,
        hasMistakes: true,
      });
      
      render(<ButtonActions />);  // Re-render with progress and mistakes
      
      expect(screen.getByRole("link", { name: /Practice Mistakes/i })).toBeInTheDocument();
    });

    it("does not render Practice Mistakes button when no mistakes", () => {
      useQuizProgress.mockReturnValueOnce({ ...mockQuizProgress, hasProgress: true });
      
      render(<ButtonActions />);  // Re-render with progress but no mistakes
      
      expect(screen.queryByRole("link", { name: /Practice Mistakes/i })).toBeNull();
    });
  });

  describe("Reset Progress Dialog", () => {
    it("opens the reset progress dialog when Reset Progress button is clicked", () => {
      useQuizProgress.mockReturnValueOnce({ ...mockQuizProgress, hasProgress: true });
      
      render(<ButtonActions />);  // Re-render with progress state
      
      const resetButton = screen.getByRole("button", { name: /Reset Progress/i });
      fireEvent.click(resetButton);  // Simulate user click to open dialog

      expect(screen.getByText(/Reset Quiz Progress/i)).toBeInTheDocument();
      expect(screen.getByText(/This action will permanently delete/i)).toBeInTheDocument();
    });

    it("calls resetProgress when Confirm Reset is clicked", () => {
      useQuizProgress.mockReturnValueOnce({ ...mockQuizProgress, hasProgress: true });
      
      render(<ButtonActions />);  // Re-render with progress state
      
      const resetButton = screen.getByRole("button", { name: /Reset Progress/i });
      fireEvent.click(resetButton);  // Simulate user click to open dialog

      const confirmResetButton = screen.getByRole("button", { name: /Confirm Reset/i });
      fireEvent.click(confirmResetButton);  // Simulate confirm reset click

      expect(mockQuizProgress.resetProgress).toHaveBeenCalledTimes(1);
    });
  });
});
