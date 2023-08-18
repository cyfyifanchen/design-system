import Image from "next/image"
import {
  container,
  image,
  content,
  actions,
  title as titleStyle,
  description as descriptionStyle,
} from "styles/card.css";
import { grid } from "./page.css"
import { button } from "styles/button.css"

const Card = ({ imageSrc, imageAlt, title, description }) => (
  <div className={container}>
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={1024}
      height={1024}
      className={image}
    />
    <div className={content}>
      <div className={titleStyle}>{title}</div>
      <div className={descriptionStyle}>{description}</div>
      <div className={actions}>
        <Button>Shop more Jordans</Button>
      </div>
    </div>
  </div>
)

const Button = ({ children, ...props }) => (
  <button className={button} {...props}>
    {children}
  </button>

)
export default function Page() {
  return (
    <div className={grid}>
      <Card
        imageSrc="/aj1.jpg"
        imageAlt="aj1"
        title="Mollit aliquip ullamco excepteur ut Lorem fugiat esse ullamco non in."
        description="Culpa amet ipsum dolore duis sint esse mollit irure sint dolore non duis excepteur."
      />
      <Card
        imageSrc="/aj2.jpg"
        imageAlt="aj2"
        title="Dolor qui occaecat irure ut fugiat eiusmod minim adipisicing eu quis dolor incididunt."
        description="Veniam eu quis labore deserunt."
      />
    </div>
  )
}
