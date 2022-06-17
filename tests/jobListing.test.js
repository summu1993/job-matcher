import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import JobListingCard from '../src/components/jobListingCard/JobListingCard'

const jobDetails =   {
    jobId: "5775d8e18a488e6c5bb08c13",
    jobTitle: {
      name: "Driver",
      imageUrl: "https://imgs.swipejobs.com/js/job-category/driver-service-3.jpg"
    },
    company: {
      name: "C.D. Barnes and Associates",
      address: {
        formattedAddress: "123 Main Street, Chicago, IL 60654",
        zoneId: "America/Chicago"
      },
      reportTo: {
        name: "Steve Rogers"
      }
    },
    wagePerHourInCents: 1081.7,
    milesToTravel: 11.666,

    shifts: [
      {
        "startDate": "2019-09-04T21:00:00Z",
        "endDate": "2019-09-05T05:00:00Z"
      },
      {
        "startDate": "2019-09-05T21:00:00Z",
        "endDate": "2019-09-06T05:00:00Z"
      },
      {
        "startDate": "2019-09-06T21:00:00Z",
        "endDate": "2019-09-07T05:00:00Z"
      },
      {
        "startDate": "2019-09-07T21:00:00Z",
        "endDate": "2019-09-08T05:00:00Z"
      },
      {
        "startDate": "2019-09-08T21:00:00Z",
        "endDate": "2019-09-09T05:00:00Z"
      },
      {
        "startDate": "2019-09-11T21:00:00Z",
        "endDate": "2019-09-12T05:00:00Z"
      },
      {
        "startDate": "2019-09-12T21:00:00Z",
        "endDate": "2019-09-13T05:00:00Z"
      },
      {
        "startDate": "2019-09-13T21:00:00Z",
        "endDate": "2019-09-14T05:00:00Z"
      },
      {
        "startDate": "2019-09-14T21:00:00Z",
        "endDate": "2019-09-15T05:00:00Z"
      },
      {
        "startDate": "2019-09-15T21:00:00Z",
        "endDate": "2019-09-16T05:00:00Z"
      }
    ],
    branch: "Chicago",
    branchPhoneNumber: "2531233311",
    requirements: [
      "Safety Vest",
      "Hart Hat"
    ]
  };

describe('Verifiying Job Listing attributes', () => {
  
  test('JobCard should have a valid image and alt', () => {
    
    const { container,getByAltText } = render(<JobListingCard  jobDetails={jobDetails} />);    
    const image = getByAltText('Driver');
    expect(container.getElementsByClassName('jobDetailsListing').length).toBe(1);
    expect(image.src).toContain('https://imgs.swipejobs.com/js/job-category/driver-service-3.jpg');
   
  });


  test('should have proper classnames', () => {
    const { container } = render(<JobListingCard jobDetails={jobDetails} />);
    expect(container.getElementsByClassName('jobDetailsListing').length).toBe(1);
    expect(container.getElementsByClassName('jobCategory').length).toBe(1);
    expect(container.getElementsByClassName('jobTitle').length).toBe(1);
    expect(container.getElementsByClassName('workDistance').length).toBe(1);
    expect(container.getElementsByClassName('hourlyRate').length).toBe(1);
  });

});
