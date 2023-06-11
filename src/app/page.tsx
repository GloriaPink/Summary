import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="bg-white text-black lg:w-96 text-center rounded-2xl p-5 lg:gap-5 grid gap-3 h-auto w-auto">
        <div>
          <img src={"/images/image-qr-code.png"} className={`w-100 h-auto rounded-xl`} />
        </div>
        <div className="font-black lg:text-2xl text-xl">Improve your front-end skills by building projects</div>
        <div className="text-sm lg:text-base pb-5 lg:pb-10">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
      </div>
    </main>
  )
}
