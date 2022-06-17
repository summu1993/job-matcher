import { render, screen } from '@testing-library/react';
import Location from '../src/components/jobListingCard/Location/Location';
import "@testing-library/jest-dom";

const address = '430 Smith St, Chicago, IL 60654, USA';
const miles = '3.4';

describe('Verifying Location of Job Opening', () => {
  test('checking the heading of location', () => {
    render(<Location address={address} miles={miles} />);

    const heading = screen.getByText('Location');
    expect(heading).toBeInTheDocument();
  });

  test('checking validity of localtion data', () => {
    render(<Location address={address} miles={miles} />);

    const addressElemet = screen.getByText(address);
    const milesData = screen.getByText(`${miles} miles from your job search location`);

    expect(addressElemet).toBeInTheDocument();
    expect(milesData).toBeInTheDocument();
  });

  test('should have proper classnames', () => {
    const { container } = render(<Location address={address} miles={miles} />);
    expect(container.getElementsByClassName('locationWrapper').length).toBe(1);
    expect(container.getElementsByClassName('address').length).toBe(1);
    expect(container.getElementsByClassName('miles').length).toBe(1);
  });
});
