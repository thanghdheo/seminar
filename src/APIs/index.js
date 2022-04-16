import sanityClient from '@sanity/client'
export const client = sanityClient({
  projectId: 'bfsmrbin',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: "skaX1Cku1Su0l2sQ7bW0RZjaLgocIzaqTN1McfcTtX6W2ssp11yUtQWNHRnGqaZMN04bOiFgJNXmzgh55pK994C9y7dRcQ6RAiWTuDtl5a4r5S9NKsfQIryVlZhn93GNt8DWXf6xhTjyDLg5v0xDFWmdX8dejuJ6m5dMqMkgDuld9tm7r0vq",
  useCdn: true, // `false` if you want to ensure fresh data
})