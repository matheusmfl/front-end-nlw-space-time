'use client'

import { ChangeEvent, useState } from 'react'

export function FilePicker() {
  const [preview, setPreview] = useState<string | null>(null)
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }

  return (
    <>
      <input
        type="file"
        id="media"
        className="invisible h-0 w-0"
        onChange={onFileSelected}
        accept="image/*"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="h-[280px] aspect-video rounded-lg object-cover"
        />
      )}
    </>
  )
}
