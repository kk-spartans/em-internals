"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { getTitleAnimation, getZoomInAnimation } from "./animations";

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
            <Image
              src="/img1.jpg"
              alt="Adelaide Superbasin"
              fill
              className="slide-image next-image"
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
              {/* Google Maps embed centered on Adelaide Superbasin coords  -33.6833,138.7333 */}
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
        <motion.div
          className="animation-placeholder"
          role="img"
          aria-label="Animated SVG placeholder"
          {...getZoomInAnimation(0.2)}
        >
          Interactive animation on what a rift valley is, not a gif, an actual
          svg animation
        </motion.div>
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
                className="summary"
                onClick={() => setLeftDetail("copper")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Copper
              </motion.button>
              <motion.button
                type="button"
                className="summary"
                onClick={() => setLeftDetail("rnd")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                R&amp;D
              </motion.button>
              <motion.button
                type="button"
                className="summary"
                onClick={() => setLeftDetail("jobs")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jobs
              </motion.button>
            </div>
            <div className="bottom-tile">
              {leftDetail === null && (
                <p className="muted">
                  Click a tile above to see more. (click enlarge button to send
                  down)
                </p>
              )}
              {leftDetail === "copper" && (
                <div>
                  <h4>Copper</h4>
                  <p>
                    The basin holds an outsized share of Australia’s copper
                    (≈68%). Even with a small land area fraction, this
                    concentration strongly impacts national mining output and
                    local economies.
                  </p>
                </div>
              )}
              {leftDetail === "rnd" && (
                <div>
                  <h4>Research &amp; Development</h4>
                  <p>
                    University and ARC-funded projects (e.g., University of
                    Adelaide) support geological mapping and mineral discovery,
                    training researchers and reducing exploration risk.
                  </p>
                </div>
              )}
              {leftDetail === "jobs" && (
                <div>
                  <h4>Jobs</h4>
                  <p>
                    Mining supply chains create local employment – from drilling
                    crews to transport and services.
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
                className="summary"
                onClick={() => setRightDetail("unusable")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Unusable land
              </motion.button>
              <motion.button
                type="button"
                className="summary"
                onClick={() => setRightDetail("floods")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Floods
              </motion.button>
              <motion.button
                type="button"
                className="summary"
                onClick={() => setRightDetail("opportunity")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Opportunity cost
              </motion.button>
            </div>
            <div className="bottom-tile">
              {rightDetail === null && (
                <p className="muted">
                  Click a tile above to see more. (click fullscreen to open
                  fullscreen)
                </p>
              )}
              {rightDetail === "unusable" && (
                <div>
                  <h4>Unusable land</h4>
                  <p>
                    Thick sedimentary sequences make some areas difficult for
                    agriculture or heavy construction. Examples include the
                    Stuart Shelf with very thick soft sediments.
                  </p>
                </div>
              )}
              {rightDetail === "floods" && (
                <div>
                  <h4>Flooding &amp; subsidence</h4>
                  <p>
                    Basins can have poor groundwater drainage and be prone to
                    subsidence. The Gawler River has a recorded history of
                    floods influenced by local geology.
                  </p>
                </div>
              )}
              {rightDetail === "opportunity" && (
                <div>
                  <h4>Opportunity cost</h4>
                  <p>
                    Focusing the area on mining limits alternative uses like
                    tourism or agriculture — choices that have uncertain
                    comparative returns.
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
