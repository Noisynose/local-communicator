export type MessageAttributes = {
  id: string,
  message: string,
  author: string,
  time: Date,
}

export class Message {
  private constructor(private id: string, public message: string, public author: string, public time: Date) {}

  writtenBy = (author: string): boolean => {
    return this.author === author;
  }

  static fromDatastore = (data: any): Message => {
    return new Message(
      data?.id ?? '',
      data?.message ?? '',
      data?.author ?? '',
      new Date(data?.time?.seconds * 1000)
    );
  }
}
