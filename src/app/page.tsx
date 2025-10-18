"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { getTitleAnimation, getZoomInAnimation } from "./animations";
import RiftValleyAnimation from "./RiftValleyAnimation";

export default function Home() {
  const [leftDetail, setLeftDetail] = useState<string | null>(null);
  const [rightDetail, setRightDetail] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const toggleMapFullscreen = async () => {
    const el = mapRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if ((el as HTMLElement).requestFullscreen) {
      await (el as HTMLElement).requestFullscreen();
    }
  };

  return (
    <div className="slides-root">
      {/* Slide 1 */}
      <section className="slide slide-1">
        <div className="slide-1-left">
          <motion.div className="image-wrap" {...getZoomInAnimation()}>
  <img
    src="./img1.jpg"       // relative path for GitHub Pages
    alt="Adelaide Superbasin"
    className="slide-image next-image"
    style={{ objectFit: "cover", width: "100%", height: "100%" }} // mimics Next.js fill
  />
  <div className="image-fade horizontal" aria-hidden />
  <div className="image-fade vertical" aria-hidden />
</motion.div>
        </div>
        <aside className="slide-1-right">
          <motion.h1 {...getTitleAnimation()}>
            The Adelaide Superbasin
          </motion.h1>

          <motion.div className="tiles" {...getTitleAnimation(0.2)}>
            <div className="tile">
              <strong>68%</strong>
              <span>of Australia’s copper</span>
            </div>
            <div className="tile">
              <strong>Main occupations</strong>
              <span>
                Mining (copper), geological research, supporting industries
              </span>
            </div>
            <div className="tile">
              <strong>Notes</strong>
              <span>
                Very hard sedimentary rock; also called Adelaide Geosyncline /
                Adelaide Rift Complex
              </span>
            </div>
          </motion.div>

          <motion.div className="map-box" {...getTitleAnimation(0.4)}>
            <div className="map-header">
              <strong>Map</strong>
              <button
                type="button"
                className="linkish"
                onClick={toggleMapFullscreen}
              >
                Click to enlarge
              </button>
            </div>
            <div ref={mapRef} className="map-embed" id="map-embed">
              <iframe
                title="Adelaide Superbasin map"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1262432.821782527!2d138.7333!3d-33.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v0000000000000`}
                loading="lazy"
                className="map-iframe"
              />
            </div>
            <small className="caption">
              Click to enlarge — opens fullscreen
            </small>
          </motion.div>
        </aside>
      </section>

      {/* Slide 2 */}
      <section className="slide slide-2">
        <motion.h2 {...getTitleAnimation()}>What is a Rift Valley?</motion.h2>
        <RiftValleyAnimation />
        <motion.div className="preface" {...getTitleAnimation(0.4)}>
          <p>
            A rift valley is a lowland between highlands produced by the action
            of geological rifting. Geological rifts are where tectonic plates
            are being pulled apart. Magma rises to fill gaps and can solidify to
            form new crust over time.
          </p>
        </motion.div>
      </section>

      {/* Slide 3 */}
      <section className="slide slide-3">
        <div className="split">
          <motion.div className="column positives" {...getTitleAnimation(0)}>
            <h3>Positives</h3>
            <div className="top-tiles">
              <motion.button
                type="button"
                className="summary peach"
                onClick={() => setLeftDetail("copper")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Copper
              </motion.button>
              <motion.button
                type="button"
                className="summary blue"
                onClick={() => setLeftDetail("rnd")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                R&amp;D
              </motion.button>
              <motion.button
                type="button"
                className="summary green"
                onClick={() => setLeftDetail("jobs")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jobs
              </motion.button>
            </div>
            <div className="bottom-tile">
              {leftDetail === null && (
                <p className="muted">Click a tile above to see more.</p>
              )}

              {leftDetail === "copper" && (
                <div>
                  <h4>Copper</h4> <br />
                  <p>
                    I wanted to find the area of the basin to see how big of a
                    deal the holding 68% of Australia’s copper really was, but{" "}
                    <i>literally no source</i> states the area, so here’s the
                    crudest approximation ever:
                  </p>
                  <p>
                    {" "}
                    <br />
                    North-South Length = ~850km <br />
                    East-West<sub>low</sub> = ~118km <br />
                    East-West<sub>high</sub> = ~353km <br />
                    <br />
                    Area<sub>low</sub> = ~100,300km<sup>2</sup> <br />
                    Area<sub>high</sub> = ~300,050km<sup>2</sup>
                  </p>{" "}
                  <br />
                  <p>
                    The area of Australia is 7,688,287km<sup>2</sup>, so even
                    with us taking the higher estimate, even though the basin
                    only carries ~3.9% of Australia’s land area, it carries 68%
                    of its copper supply.
                  </p>{" "}
                  <br />
                  <p>
                    And Australia is the 8<sup>th</sup> biggest copper supplier
                    in the world, and copper is around 25% of its entire mining
                    sector (which itself is around 13.6% of its GDP).
                  </p>
                </div>
              )}

              {leftDetail === "rnd" && (
                <div>
                  <h4>Research &amp; Development</h4> <br />
                  <p>
                    <a
                      href="https://www.adelaide.edu.au/newsroom/news/list/2022/04/14/superbasin-project-unearths-geological-history"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The University of Adelaide’s Superbasin project
                    </a>{" "}
                    received a 400,000 AUD ARC (Australian Research Council)
                    grant over 3 years to study the Adelaide Superbasin.
                  </p>
                  <p>
                    {" "}
                    <br />
                    This isn’t just theoretical — the research contributes to
                    discovering economically valuable minerals like copper,
                    lead, and silver. Exploration companies use these findings
                    to decide where to drill, reducing wasted investment and
                    risk.
                  </p>
                  <p>
                    {" "}
                    <br />
                    It also means we train smarter, more hands-on students —
                    graduate students, postdocs, and early-career researchers
                    get real-world experience in mining geology.
                  </p>
                </div>
              )}

              {leftDetail === "jobs" && (
                <div>
                  <h4>JOBS JOBS JOBS</h4> <br />
                  <p>
                    <iframe
                      className="rounded-2xl"
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/8fcSviC7cRM?start=27"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </p>
                  <p>
                    {" "}
                    <br />
                    Every truck moving ore, every drill bit made, every meal
                    served at a mining camp translates to local jobs. And in
                    this economy, people would take that.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div className="column negatives" {...getTitleAnimation(0.2)}>
            <h3>Negatives</h3>
            <div className="top-tiles">
              <motion.button
                type="button"
                className="summary red"
                onClick={() => setRightDetail("unusable")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Unusable land
              </motion.button>
              <motion.button
                type="button"
                className="summary maroon"
                onClick={() => setRightDetail("floods")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Floods
              </motion.button>
              <motion.button
                type="button"
                className="summary lavender"
                onClick={() => setRightDetail("opportunity")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Opportunity cost
              </motion.button>
            </div>
            <div className="bottom-tile">
              {rightDetail === null && (
                <p className="muted">Click a tile above to see more.</p>
              )}

              {rightDetail === "unusable" && (
                <div>
                  <h4>Unusable land</h4> <br />
                  <p>
                    The Superbasin covers huge swaths of land. Its ancient rock
                    formations and sedimentary layers make some areas poor for
                    agriculture, construction, or urban development. That’s land
                    that could’ve been used more productively otherwise.
                  </p>{" "}
                  <br />
                  <p>
                    For example, the Stuart Shelf has insanely thick sedimentary
                    layers (soft rocks above the crust), up to 500m (the usual
                    elsewhere is around 100–200m), which makes it much harder to
                    build taller and heavier buildings — especially in an
                    earthquake-prone zone.
                  </p>
                  <p>
                    {" "}
                    <br />
                    To be fair, the sedimentary layer height near Avadi is
                    around 2.4km, but that area isn’t earthquake-prone and we
                    don’t build tall structures there. It’s about 150m near T.
                    Nagar.
                  </p>
                </div>
              )}

              {rightDetail === "floods" && (
                <div>
                  <h4>Flooding &amp; subsidence</h4> <br />
                  <p>
                    Basins trap groundwater poorly and are prone to subsidence
                    if natural fractures exist. Even without mining, that limits
                    infrastructure development.
                  </p>{" "}
                  <br />
                  <p>
                    The Gawler River, for instance, has flooded multiple times —
                    in 1992, 2005, and 2016 — due to the geology there (soil
                    types, slopes from hills, and alluvial plains).
                  </p>{" "}
                  <br />
                </div>
              )}

              {rightDetail === "opportunity" && (
                <div>
                  <h4>Opportunity cost in diversification</h4> <br />
                  <p>
                    By focusing this region mostly on mineral mining, we give up
                    opportunities in tourism, agriculture, or other sectors.
                    Those might have produced more — or less — income, but
                    without trying, we’ll never know.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
