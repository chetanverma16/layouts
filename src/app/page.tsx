"use client";
import { data } from "@/data";
import VideoControls from "@/components/video-controls";

export default function Home() {
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
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-muted-foreground w-2/3">
                {item.description}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-2">
              <VideoControls src={item.video} width="100%" height="auto" />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
