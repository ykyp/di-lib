import { Constructable } from "../Constructable";

export function Injectable(constructor: Constructable): Constructable {
    return constructor;
}
