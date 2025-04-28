import {Badge} from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <h1>Theme Configuration</h1>
        <Badge variant="outline">Badge</Badge>
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
    </>
  );
}
