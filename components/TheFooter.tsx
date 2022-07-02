const TheFooter = () => {
  return (
    <footer className="mt-5 border-t-4 border-gray-600 pt-5 text-center">
      <p className="text-gray-100">
        Avatars adapted from{' '}
        <a className="font-bold text-white" href="#">
          @pikisuperstar
        </a>
        ’s illustrations. Developed by{' '}
        <a className="font-bold text-white" href="#">
          @luvejo
        </a>
        .
      </p>

      <nav className="mt-5 flex justify-center gap-x-4">
        <a className="underline" href="#">
          Privacy
        </a>
        <a className="underline" href="#">
          Terms
        </a>
        <a className="underline" href="#">
          Cookies
        </a>
      </nav>
    </footer>
  )
}

export default TheFooter
