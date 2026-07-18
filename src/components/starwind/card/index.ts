import Card from "./Card.astro";
import CardAction from "./CardAction.astro";
import CardContent from "./CardContent.astro";
import CardDescription from "./CardDescription.astro";
import CardFooter from "./CardFooter.astro";
import CardHeader from "./CardHeader.astro";
import CardTitle from "./CardTitle.astro";
import {
  card,
  cardAction,
  cardContent,
  cardDescription,
  cardFooter,
  cardHeader,
  cardTitle,
} from "./variants";

const CardVariants = {
  card,
  cardAction,
  cardContent,
  cardDescription,
  cardFooter,
  cardHeader,
  cardTitle,
};

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardVariants,
};

export default {
  Action: CardAction,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Root: Card,
  Title: CardTitle,
};
