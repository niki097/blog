import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
export default function RTE() {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-2 ' htmlFor={id}>
            {label}
            </label>
            }
   <Controller 
   name={name || "content"}
   control={control}
   render={({field:{onChange}})=>{
<Editor initialValue={defaultValue}
init={{
    initialValue:defaultValue,
    height:500,
    menubar: false,
    plugins: [
      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'print', 'preview', 'anchor',
      'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount', 'codesample code fullscreen',
      'insertdatetime', 'codesample', 'lists', 'link', 'media', 'table', 'paste', 'code', 'help', 'wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
      'bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
}}
onEditorChange={onChange}
/>
   }}
   />

</div>
  )
}
