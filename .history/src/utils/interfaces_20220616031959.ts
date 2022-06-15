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

export interface AuthContextType {
  jobDetail: number;
  

  wishlists: WishlistItemProps[];
  wishlistsCount: number;
  setWishlistsCount(input: number): void;
  setWishlists: (input: WishlistItemProps[]) => void;
  addWishlist: (wishlist: WishlistFieldProps) => void;
  refreshWishlists: () => void;
  deleteWishlist: (id: string) => void;
  fetchWishlist: (id: number) => void;
  state: any;
  dispatch: any;
}