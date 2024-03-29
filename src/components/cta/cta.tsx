import React from "react";
import Link from "next/link";

import CTAProps from "./cta.props";

export default function CTA(props: CTAProps) {
  const { size } = props
  
  return (
    <Link href="/beratung" className={`button ${size === 'small' ? 'button-small' : ''}`}>Kostenloses Beratungsgespräch vereinbaren</Link>
  )
}