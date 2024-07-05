export const RateData: IRateData[] = [
  {
    value:100,

  },
  {
    value:300,

  },
  {
    value:500,

  },
  {
    value:1000,

  },
  {
    value:2000,

  },
  {
    value:5000,
  }
]

interface IRateData {
  value: number
}

export const initialData = {
  recipient_name: '',
  recipient_email_id: '',
  dob: '',
  sender_email: '',
  message: '',
}
