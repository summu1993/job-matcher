export type DispatchType = (args: { type: string; payload: any }) => void

export interface JobDetail {
  jobId: string
  jobTitle: {
    name: string
    imageUrl: string
  }
  company: {
    name: string
    address: {
      formattedAddress: string
      zoneId: string
    }
    reportTo: {
      name: string
      phone: string
    }
  }
  wagePerHourInCents: number
  milesToTravel: number
  shifts: [
    {
      startDate: Date
      endDate: Date
    }
  ]
  branch: string
  branchPhoneNumber: string
  requirements: string[]
}

export interface WorkerProfile {
  address: {
    formattedAddress: string
    zoneId: string
  }
  email: string
  firstName: string
  lastName: string
  maxJobDistance: number
  phoneNumber: string
  workerId: string
}

export interface ButtonProps {
  buttonText?: string
  buttonId?: string
  buttonClass: string
  datatest?: string
  buttonTestId?: string
  submitFunction?: any
  children?: any
}

export interface AuthContextType {
  jobDetail: JobDetail[]
  workerProfile: WorkerProfile
  showJobDetails: boolean
  dismissToast: () => void
  notifyToast: (type: string, message: string) => void
  setShowJobDetails: (input: boolean) => void
  setJobDetail: (input: JobDetail[]) => void
  setWorkerProfile: (input: WorkerProfile) => void
  getWorker: any
  getMatchingJobs: any
}
