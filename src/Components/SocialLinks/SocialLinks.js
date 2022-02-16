import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiFacebookFill } from 'react-icons/ri'
import { Items,List } from './SocialLinksElements'

export const SocialLinks = () => {
  return (
    <div>
        <Items>
            <List><RiFacebookFill/></List>
            <List><AiOutlineYoutube/></List>
            <List><AiOutlineInstagram/></List>
            <List><AiOutlineWhatsApp/></List>
            <List><FaLinkedinIn/></List>
        </Items>
    </div>
  )
}
