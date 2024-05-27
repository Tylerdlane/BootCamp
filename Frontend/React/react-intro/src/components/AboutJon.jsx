import React from 'react'
import JonImage from '../assets/jon-arbuckle.png';
import randomColor from '../components/randomColor';

const AboutJon = () => {
          
    return (
        <>
            <img src={JonImage} alt="Jon Arbuckle" />
    <div style={{randomColor}}>
      <p>
        Hi there everyone! My name is <u>Jon Arbuckle</u>. I am 30 years old
        and I am a cartoonist that lives in Muncie, Indiana. I am a proud
        owner of a cat named <strong>Garfield</strong> and a dog named{" "}
        <strong>Odie.</strong> Garfield is fat, lazy, and loves to eat,
        while Odie is a dog without a brain. Although my pets drive me{" "}
        <em>crazy</em>, I can't imagine life without them.
      </p>

      <p>
        I spend about half my time going to the grocery store to buy enough
        food to feed Garfield. I have to make sure to buy all of Garfield's
        favorite foods, or else he'll get grumpy. This includes milk,
        cheese, bread, ham, chicken wings, potato chips, pasta with
        <br />
        marinara sauce, frozen pizzas, and lots and lots of lasagna. When I
        come home, Garfield usually attack me and tries to eat everything in
        the grocery bag before I even have time to put it in the
        refrigerator. One time he ate everything that I bought in 30
        <br />
        seconds, and I had to go back to the store to buy more food.
        <em> I wasn't too happy about that. </em>{" "}
      </p>
    </div>
        </>
    )
}

export default AboutJon