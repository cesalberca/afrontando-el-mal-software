import { Link } from "./link";

export class EmptyLink implements Link {
  async next() {}

  setNext(link: Link) {}
}
