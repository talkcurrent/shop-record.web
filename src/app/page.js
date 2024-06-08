'use client'

import InputText from './form/InputText';
import { useState } from 'react';
import DivTag from './DivTag';
import InputSelect from './form/InputSelect';
import { useAuth } from '@/hooks/auth';

export default function Home() {
  const [tab, settab] = useState(1)

  const [network, setnetwork] = useState('')
  const [subType, setsubType] = useState('')
  const [description, setdescription] = useState('')
  const [sub_category, setsub_category] = useState('')
  const [category, setcategory] = useState('')

  const [subCatToArray, setsubCatToArray] = useState([])

  const { saveData } = useAuth({
    middleware: 'guest',
  })


  const handleSave = async () => {
    const ok = await saveData({ category, subCatToArray })
    if (ok) {
      setsubCatToArray([])
      setsub_category('')
      setcategory('')
    }
  }

  const addToList = () => {
    if (sub_category.trim().length) {
      setsubCatToArray((prev) => {
        const catExist = prev.find(cat => cat == sub_category.trim());
        if (!catExist) {
          return [...prev, sub_category.trim()]

        } else {
          return prev
        }
      })
      setsub_category('')
    }

  }

  const removeCategory = (index) => {
    const unwanted = subCatToArray[index];

    setsubCatToArray((prev) => {
      return prev.filter(cat => cat != unwanted);

    })
  }
  return (
    <main
      style={{
        margin: '100px 100px 0 100px'
      }}
    >
      <DivTag
        gap={"10px"}
        width={"350px"}
        height={"max-content"}
        margin={"0 auto"}
      >

        <InputText
          inputType={"text"}
          labelFadeColor={"#9ca3af"}
          // labelColor={"black"}
          // color={"black"}
          tabIndex={4}
          label={"Category"}
          value={category}
          onChange={(e) => { setcategory(e.target.value) }}
        />
        <DivTag
          height={"max-content"}
          maxheight={"400px"}
          overflow={"auto"}
          position={"relative"}
          border={"1px solid #373737"}
          bradius={"8px"}
          padding={"5px"}
        >
          <DivTag
            position={'sticky'}
            top={"0px"}
            padding={"0 10px"}
            gaf={"column"}
          >
            <h3>Sub Category's list</h3>
            <button onClick={handleSave}
              style={{
                padding: "5px 30px",
                background: "blue",
                outline: 'none',
                border: 'unset',
                borderRadius: "10px"
              }}
            >Submit List</button>
          </DivTag>
          <DivTag
            padding={"10px 0"}
            gap={"10px"}
          >
            {subCatToArray.length ?
              subCatToArray.map((ca, index) => {
                return (
                  <DivTag
                    fsize={"medium"}
                    key={index}
                    gtc={"1fr auto"}
                  >
                    <DivTag>{ca}</DivTag>
                    <DivTag
                      color={"red"}
                      fsize={"large"}
                      padding={'5px'}
                      transform={"rotate(45deg)"}
                      cursor={"pointer"}
                      handleClick={() => removeCategory(index)}
                    >+</DivTag>
                  </DivTag>
                )
              })
              :
              <DivTag><small><i>List is empty</i></small></DivTag>
            }
          </DivTag>
        </DivTag>
        <InputText
          inputType={"text"}
          labelFadeColor={"#9ca3af"}
          // labelColor={"black"}
          // color={"black"}
          tabIndex={5}
          label={"Sub Categories"}
          value={sub_category}
          onChange={(e) => { setsub_category(e.target.value) }}
        />

        <DivTag
          justify={"center"}
          justifyself={"center"}
          bgc={"#22530f"}
        >
          <button onClick={addToList}
            style={{ padding: "5px 30px", background: "inherit", color: 'white' }}
          >Save Category</button>
        </DivTag>
      </DivTag>

    </main>
  )
}
