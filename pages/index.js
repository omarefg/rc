import { useState } from 'react'
import Head from 'next/head'

const colors = {
  red: '#b80a31',
  blue: '#0044af',
  orange: '#ff5700',
  yellow: '#ffd600',
  green: '#009c46',
  white: '#ffffff',
}

const data = [
  Array(9).fill(colors.orange),
  Array(9).fill(colors.blue),
  Array(9).fill(colors.white),
  Array(9).fill(colors.red),
  Array(9).fill(colors.yellow),
  Array(9).fill(colors.green),
];

export default function Home() {
  const [faces, setFaces] = useState(data)

  return (
    <div>
      <Head>
        <title>Rubik's Cube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
      <div className="container">
        <div>
          {faces.slice(0, 1).map((face, faceIndex) => (
            <div key={faceIndex} className="face">
                {face.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="item"
                    style={{ background: color }}
                  />
                ))}
            </div>
          ))}
        </div>
        <div>
          {faces.slice(1, 4).map((face, faceIndex) => (
            <div key={faceIndex} className="face">
                {face.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="item"
                    style={{ background: color }}
                  />
                ))}
            </div>
          ))}
        </div>
        <div>
          {faces.slice(4, 5).map((face, faceIndex) => (
            <div key={faceIndex} className="face">
                {face.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="item"
                    style={{ background: color }}
                  />
                ))}
            </div>
          ))}
        </div>
        <div>
          {faces.slice(5).map((face, faceIndex) => (
            <div key={faceIndex} className="face">
                {face.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="item"
                    style={{ background: color }}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
      </main>

      <style jsx>{`
        .main {
          display: flex;
          min-height: 100vh;
          width: 100vw;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .container {
          display: flex;
          align-items: center;
        }

        .face {
          display: grid;
          grid-template-columns: repeat(3,50px);
          grid-template-rows: repeat(3,50px);
          gap: 5px;
          background-color: black;
        }

        .item {
          width: 50px;
          height: 50px;
        }
      `}</style>

      <style global jsx>{`
        body {
          background-color: #333;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
