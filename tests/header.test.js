// import Home from "../src/pages/index";
import Navbar from "../src/components/HeaderNav";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Job Matcher Header Swipe Jobs", () => {
    
    it("renders the index page of job matching portal page", () => {
        const { container } = render(<Navbar />);
      // check if all components are rendered
      // also checks for the non existence of jobDetailsWrapper as it only exist when users click on the see matching jobs CTA
      expect(screen.getByTestId("navBarTop")).toBeInTheDocument();
      expect(container.getElementsByClassName("jobDetailsWrapper").length).toBe(0);
    });
  });