import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import styles from '../components/layout/Page/Page.module.css'

function Home() {
    return (
        <Page>
            <Section>
                
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h1>Hey</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eius quisquam in esse aut, autem doloribus
                            rerum hic iste blanditiis, error dolore. Explicabo
                            temporibus incidunt ea odio. Perferendis ea beatae
                            dignissimos, animi illo veritatis atque dolore
                            dolorem, quisquam doloribus tenetur. Consequatur qui
                            porro ad atque. Iste, soluta. Cum voluptatem nostrum
                            minima?
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Molestias reiciendis, nisi neque natus sunt
                            similique necessitatibus, officiis cumque culpa ad
                            labore quia error, aperiam vero.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                {/* <div className={styles.row}> */}
                <h2>Projects</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur delectus deserunt corrupti consectetur, animi
                    blanditiis praesentium ratione atque libero cumque eveniet
                    in quidem. Perferendis dicta suscipit perspiciatis officia
                    illum inventore ipsam accusantium minima, magni libero est
                    sit eligendi quibusdam sed. Nam eaque perferendis veritatis
                    natus reprehenderit ratione tempore sapiente dolorum earum
                    iste, aliquid quod blanditiis consequuntur aspernatur rerum.
                    Accusantium cumque qui nemo? Dolores necessitatibus maxime
                    saepe at ratione voluptate dolorem. Iure aperiam, maxime
                    quis natus velit eius cum eveniet ullam optio? Laudantium
                    velit, doloribus explicabo delectus magni esse commodi iure
                    odio, dignissimos debitis cumque atque dolore sed architecto
                    reprehenderit nulla!
                </p>
                {/* </div> */}
            </Section>
            <Section>
                <div className={styles.row}>
                    <h2>Blog</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed, dolorem!
                    </p>
                </div>
            </Section>
        </Page>
    )
}

export default Home
