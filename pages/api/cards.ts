import { NextApiRequest, NextApiResponse } from 'next'

const mockData = [
  {
    id: 1,
    title: 'Hey!Reap3r 1',
    image: 'whitelist-image.png'
  },
  {
    id: 2,
    title: 'Hasew qewqeas  2',
    image: 'whitelist-image.png'
  },
  {
    id: 3,
    title: 'Trews 3',
    image: 'whitelist-image-2.png'
  },
  {
    id: 4,
    title: 'Krterqa 4',
    image: 'whitelist-image-2.png'
  },
  {
    id: 5,
    title: 'Bbxcva 5',
    image: 'whitelist-image-2.png'
  },
  {
    id: 6,
    title: 'Qzdsaz 6',
    image: 'whitelist-image-2.png'
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query
  const filteredData = mockData.filter((item) => {
    return item.title.toLowerCase().includes((search as string).toLowerCase())
  })

  res.status(200).send(filteredData)
}
