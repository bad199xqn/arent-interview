export type RecordType = {
  id: number, 
  title: string,
  time: string,
  content: string
}

export type DiaryGridPropsType = {
  postList: RecordType[]
}

export type RecordCardPropsType = {
  id: number, 
  title: string,
  time: string,
  cardKey: string,
  content: string
}