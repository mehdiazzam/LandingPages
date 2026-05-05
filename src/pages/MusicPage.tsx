import { useEffect, useState } from 'react';
import styles from './MusicPage.module.css';
import GlobalHeader from '../components/GlobalHeader';

interface MusicPageProps {
  onBack: () => void;
}

export default function MusicPage({ onBack }: MusicPageProps) {
  const [bars, setBars] = useState<number[]>(Array(16).fill(20));

  useEffect(() => {
    // Simple visualizer effect
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 100));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.crtOverlay} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <GlobalHeader title="NEXUS" accent="#ccff00" tone="dark" onBack={onBack} compact />
      </div>

      {/* Main OS Window */}
      <main className={styles.window} style={{ zIndex: 10 }}>
        <div className={styles.titleBar}>
          <span>system/sys32/NEXUS_CORE.exe</span>
          <div className={styles.titleBtns}>
            <div className={styles.titleBtn} />
            <div className={styles.titleBtn} />
            <div className={styles.titleBtn} />
          </div>
        </div>

        <div className={styles.windowBody}>
          <div className={styles.heroGrid}>
            {/* Visual Header / Glitch Box */}
            <div className={styles.window} style={{ margin: 0 }}>
              <div className={styles.titleBar}>
                <span>viewer.exe</span>
                <div className={styles.titleBtns}>
                  <div className={styles.titleBtn} />
                </div>
              </div>
              <div className={styles.windowBody} style={{ padding: 0 }}>
                <div className={styles.glitchBox}>
                  <span className={styles.heroMeta}>Loading Module... [OK]</span>
                  <h1 className={styles.glitchText} data-text="NEXUS">NEXUS</h1>
                  <p style={{ color: 'var(--y2k-acid)', fontWeight: 'bold' }}>SYSTEM ACTIVE // 13.08.2045</p>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className={styles.window} style={{ margin: 0 }}>
              <div className={styles.titleBar}>
                <span>sys_info.dll</span>
                <div className={styles.titleBtns}>
                  <div className={styles.titleBtn} />
                </div>
              </div>
              <div className={styles.windowBody}>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Location</span>
                    <span className={styles.val}>Neo-Tokyo Sector 4</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Stages</span>
                    <span className={styles.val}>3 (Main, Void, Sub)</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Status</span>
                    <span className={styles.val} style={{ color: 'red', animation: 'pulse 1s infinite alternate' }}>CRITICAL OVERLOAD</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Access Code</span>
                    <span className={styles.val}>0x9F4B2A</span>
                  </div>
                </div>

                <div className={styles.vizContainer} style={{ marginTop: '16px' }}>
                  {bars.map((h, i) => (
                    <div key={i} className={styles.vizBar} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.tickerWrap}>
            <div className={styles.tickerInner}>
              {[...Array(6)].map((_, i) => (
                <span key={i} className={styles.tickerItem}>
                  &gt; [WARNING] HIGH FREQUENCY DETECTED &gt; LINEUP CORRUPTED &gt; REBOOTING... 
                </span>
              ))}
            </div>
          </div>

          {/* Lineup Window */}
          <div className={styles.window} style={{ margin: '8px 0 0 0' }}>
            <div className={styles.titleBar}>
              <span>lineup_db.dbf</span>
              <div className={styles.titleBtns}>
                <div className={styles.titleBtn} />
                <div className={styles.titleBtn} />
              </div>
            </div>
            <div className={styles.windowBody} style={{ padding: 0, overflowX: 'auto' }}>
              <table className={styles.lineupTable}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ARTIST</th>
                    <th>GENRE</th>
                    <th>STAGE</th>
                    <th>TIME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.rowHeadliner}>
                    <td>01</td>
                    <td>CYBER_PUNK</td>
                    <td>INDUSTRIAL</td>
                    <td>MAIN</td>
                    <td>23:00</td>
                  </tr>
                  <tr className={styles.rowHeadliner}>
                    <td>02</td>
                    <td>ECHO_CHAMBER</td>
                    <td>DARKWAVE</td>
                    <td>VOID</td>
                    <td>00:30</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>NULL_POINTER</td>
                    <td>TEKNO</td>
                    <td>SUB</td>
                    <td>02:00</td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>GLITCH_KID</td>
                    <td>BREAKCORE</td>
                    <td>MAIN</td>
                    <td>03:15</td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>SYNTH_WAVE_99</td>
                    <td>RETROWAVE</td>
                    <td>SUB</td>
                    <td>04:30</td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>VIRAL_LOAD</td>
                    <td>EBM</td>
                    <td>VOID</td>
                    <td>05:45</td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>DAEMON_PROCESS</td>
                    <td>HARDSTYLE</td>
                    <td>MAIN</td>
                    <td>07:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.bottomGrid}>
            {/* Audio Player */}
            <div className={styles.window} style={{ margin: '8px 0 0 0' }}>
              <div className={styles.titleBar}>
                <span>sound_module.exe</span>
                <div className={styles.titleBtns}>
                  <div className={styles.titleBtn} />
                </div>
              </div>
              <div className={styles.windowBody}>
                <div className={styles.audioPlayer}>
                  <div className={styles.audioDisplay}>
                    <span>TRACK_01 - ALL_SYSTEMS_GO.mp3</span>
                    <span className={styles.audioTime}>02:14 / 05:59</span>
                  </div>
                  <div className={styles.audioProgress}>
                    <div className={styles.audioProgressFill}></div>
                  </div>
                  <div className={styles.audioControls}>
                    <button className={styles.audioBtn}>&lt;&lt;</button>
                    <button className={styles.audioBtn}>PLAY</button>
                    <button className={styles.audioBtn}>PAUSE</button>
                    <button className={styles.audioBtn}>STOP</button>
                    <button className={styles.audioBtn}>&gt;&gt;</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat IRC */}
            <div className={styles.window} style={{ margin: '8px 0 0 0' }}>
              <div className={styles.titleBar}>
                <span>net_chat.irc</span>
                <div className={styles.titleBtns}>
                  <div className={styles.titleBtn} />
                </div>
              </div>
              <div className={styles.windowBody} style={{ padding: '8px' }}>
                <div className={styles.chatBox}>
                  <p><span className={styles.chatUser}>&lt;AcidBurn&gt;</span> anyone got extra tickets for MAIN stage?</p>
                  <p><span className={styles.chatUser}>&lt;ZeroCool&gt;</span> sold out in 10 mins man. total crash.</p>
                  <p><span className={styles.chatUser}>&lt;Neo&gt;</span> follow the white rabbit.</p>
                  <p><span className={styles.chatUser}>&lt;System&gt;</span> User 'Trinity' has joined the channel.</p>
                  <p><span className={styles.chatUser}>&lt;Trinity&gt;</span> see you all in the pit... ;)</p>
                </div>
                <div className={styles.chatInput}>
                  <span>&gt;</span>
                  <div className={styles.chatCursor}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaContainer}>
            <span className={styles.ctaHeading}>&gt; ACQUIRE ACCESS_KEY:</span>
            <button className={styles.buttonY2K}>EXECUTE TRANSACTION</button>
          </div>

          <div className={styles.webrings}>
            <span className={styles.pixelBadge}>BEST VIEWED IN NETSCAPE</span>
            <span className={styles.pixelBadge}>800x600</span>
            <span className={styles.pixelBadge}>HTML 4.0</span>
          </div>
        </div>
      </main>
    </div>
  );
}
