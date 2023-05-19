import { useState, useRef } from 'react'

const SimpleCarousel = ({ images }) => {
  const [selectedItemId, setSelectedItemId] = useState(images[0].id)
  const listRef = useRef(null)

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId)
    // Scroll to the selected item
    const selectedItem = document.getElementById(itemId)
    if (selectedItem) {
      selectedItem.scrollIntoView({ behavior: 'smooth' })
      // .scrollIntoView({ behavior: "smooth" });
      const list = listRef.current
      const itemLeft = selectedItem.offsetLeft / 2
      list && list.scrollTo({ left: itemLeft, behavior: 'smooth' })
    }
  }
  return (
    <ul ref={listRef} className='whitespace-nowrap overflow-hidden flex-row snap-x'>
      {images.map((img, i) => {
        return (
          <li
            key={`${img}-${img.id}`}
            id={img.id}
            className={`relative object-cover snap-center shrink-0 cursor-pointer inline-block bg-dark-blue m-2 rounded-md shadow-lg overflow-hidden border
              ${selectedItemId === img.id ? 'border-crimson' : 'border-off-white opacity-50'}
            `}
            onClick={() => handleItemClick(img.id)}
          >
            <img alt={`furniture piece ${img}`} draggable='false' src={img.src} className='object-cover w-40 h-40' />
            <p className='select-none  t3 absolute left-[.5rem] top-0 text-off-white'>{img.id}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default SimpleCarousel
