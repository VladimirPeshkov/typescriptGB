type Message = {
  text: string;
  type: string;
};

type Action = {
  name: string;
  handler: () => void;
};
export { Message, Action };
