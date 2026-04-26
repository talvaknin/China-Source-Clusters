import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useMemo, useState } from 'react';
import cityData from '../data/cities.example.json';
import 'echarts/map/js/china';

type Cluster = {
  name: string;
  strength: 'low' | 'medium' | 'high';
  summary: string;
  key_companies: string[];
  sources: string[];
  notes?: string;
};

type CityRecord = {
  city_id: string;
  city_name: string;
  province: string;
  coordinates: [number, number];
  industry_clusters: Cluster[];
  confidence: 'low' | 'medium' | 'high';
  last_updated: string;
};

const cities = cityData as CityRecord[];

const strengthColor: Record<Cluster['strength'], string> = {
  low: '#f39c12',
  medium: '#2980b9',
  high: '#16a085'
};

function App() {
  const [selectedCity, setSelectedCity] = useState<CityRecord | null>(cities[0] ?? null);

  const option = useMemo(() => {
    return {
      tooltip: {
        trigger: 'item'
      },
      geo: {
        map: 'china',
        roam: true,
        itemStyle: {
          areaColor: '#eaf2ff',
          borderColor: '#8aa6d9'
        },
        emphasis: {
          itemStyle: {
            areaColor: '#d5e4ff'
          }
        }
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 14,
          data: cities.map((city) => ({
            name: city.city_name,
            value: [...city.coordinates, city.industry_clusters.length]
          })),
          itemStyle: {
            color: '#e74c3c'
          }
        }
      ]
    };
  }, []);

  return (
    <div className="page">
      <header>
        <h1>China Source Clusters</h1>
        <p>Click a city marker to see the local industry cluster profile.</p>
      </header>

      <main className="layout">
        <section className="map-panel">
          <ReactECharts
            echarts={echarts}
            option={option}
            style={{ height: '70vh', width: '100%' }}
            onEvents={{
              click: (params: { name?: string }) => {
                const city = cities.find((item) => item.city_name === params.name);
                if (city) {
                  setSelectedCity(city);
                }
              }
            }}
          />
        </section>

        <aside className="details-panel">
          {selectedCity ? (
            <>
              <h2>{selectedCity.city_name}</h2>
              <p>
                <strong>Province:</strong> {selectedCity.province}
              </p>
              <p>
                <strong>Confidence:</strong> {selectedCity.confidence}
              </p>
              <p>
                <strong>Last Updated:</strong> {selectedCity.last_updated}
              </p>

              <h3>Industry Clusters</h3>
              {selectedCity.industry_clusters.map((cluster) => (
                <article className="cluster-card" key={cluster.name}>
                  <h4>{cluster.name}</h4>
                  <p>
                    <span
                      className="badge"
                      style={{ backgroundColor: strengthColor[cluster.strength] }}
                    >
                      {cluster.strength.toUpperCase()}
                    </span>
                  </p>
                  <p>{cluster.summary}</p>
                  <p>
                    <strong>Key companies:</strong>{' '}
                    {cluster.key_companies.length ? cluster.key_companies.join(', ') : 'Not listed yet'}
                  </p>
                  {cluster.notes ? <p><strong>Notes:</strong> {cluster.notes}</p> : null}
                </article>
              ))}
            </>
          ) : (
            <p>Select a city marker to view cluster details.</p>
          )}
        </aside>
      </main>
    </div>
  );
}

export default App;
