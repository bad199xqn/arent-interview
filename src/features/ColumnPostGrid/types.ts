export type ColumnPostType = {
  id: number, 
  image?: string,
  title: string,
  time: string,
  tags: string[]
}

export type ColumnPostGridPropsType = {
  postList: ColumnPostType[]
}

export type PostCardPropsType = {
  id: number, 
  image?: string,
  title: string,
  time: string,
  tags: string[],
  cardKey: string
}