export {}

export type MenuItem = {
    category: Category
    description: string
    id: number
    imageUrl: string
    name: string
    price: number
    quantity: number
  }

  export type MenuItems = [
      {
    category: Category
    description: string
    id: number
    imageUrl: string
    name: string
    price: number
    quantity: number
  }
  ]

  export type Category = {
    id: number
    name: string
  }

export type Order = {
  OrderLines: OrderLine[] 
  address: string
  complete: boolean
  date: string
  id: number
  name: string
}

export type OrderLine = {
  id: number
  quantity: number
  menu: MenuItem
  complete: boolean
  date: string
}

export type AppStateType = {
  cart: Order[]
}

