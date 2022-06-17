import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReportTo from '../src/components/jobListingCard/ReportTo/ReportTo';


const reportToName = 'David';
const reportToPhone = '990001991';

describe('Verifiy Report To component', () => {
  
    test('should have the heading of report to', () => {
    render(<ReportTo reportToName={reportToName} reportToPhone={reportToPhone} />);

    const heading = screen.getByText('Report To');
    expect(heading).toBeInTheDocument();
  });

  test('should render the data about the reporting person', () => {
    render(<ReportTo reportToName={reportToName} reportToPhone={reportToPhone} />);
    const reportingPersonElement = screen.getByText('David 990001991');
    expect(reportingPersonElement).toBeInTheDocument();
  });
});