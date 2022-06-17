import Requirements from "../src/components/jobListingCard/Requirements/Requirements";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


const requirements = ['Safety Vest', 'Hart Hat'];

describe('Requirements', () => {
  test('should have the heading of requirements', () => {
    render(<Requirements requirements={requirements} />);

    const heading = screen.getByText('Requirements');
    expect(heading).toBeInTheDocument();
  });

  test('should render the list of requirements', () => {
    render(<Requirements requirements={requirements} />);

    const requirementNode = screen.getByText('- Safety Vest');

    expect(requirementNode).toBeInTheDocument();
  });
});