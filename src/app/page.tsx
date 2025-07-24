"use client";
import { data } from "@/data";
import VideoControls from "@/components/video-controls";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const router = useRouter(); // Ensure you import useRouter from 'next/navigation'
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-2">Layouts & Experiments</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Beautifully designed open-source layouts and UI experiments built with
          components from ui.chetanverma.com and shadcn/ui.
        </p>
      </section>

      {/* Main Content */}
      <main className="mx-auto flex flex-col gap-y-10 px-2 pb-16">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
              <div className="flex items-center gap-x-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>{" "}
                {item.badge && <Badge>{item.badge}</Badge>}
              </div>
              <p className="text-sm text-muted-foreground w-2/3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.techstack.map((tech) => (
                  <Badge variant="outline" key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-2 overflow-hidden">
              {item.media.type === "image" ? (
                <img
                  src={item.media.src}
                  alt={item.name}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <VideoControls src={item.media.src} height="auto" />
              )}
            </div>
            <div className="flex items-end justify-end gap-x-2 w-full">
              <Button
                onClick={() => {
                  window.open(item.src, "_blank");
                }}
                variant="link"
                className="text-sm"
              >
                Live Demo <ArrowUpRight />
              </Button>
              <Button
                onClick={() => {
                  window.open(item.github, "_blank");
                }}
                variant="link"
                className="text-sm"
                disabled={!item.github} // Disable if no GitHub link
              >
                Github <ArrowUpRight />
              </Button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
