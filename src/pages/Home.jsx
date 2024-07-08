import Page from '../components/layout/Page/Page'
import Section from '../components/layout/Page/Section'
import styles from '../components/layout/Page/Page.module.css'

function Home() {
    return (
        <Page>
            <Section>
                <div className={styles.row}>
                    <h1>Grant Collins</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius quisquam in esse aut, autem doloribus rerum hic
                        iste blanditiis, error dolore. Explicabo temporibus
                        incidunt ea odio. Perferendis ea beatae dignissimos,
                        animi illo veritatis atque dolore dolorem, quisquam
                        doloribus tenetur. Consequatur qui porro ad atque. Iste,
                        soluta. Cum voluptatem nostrum minima?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestias reiciendis, nisi neque natus sunt
                        similique necessitatibus, officiis cumque culpa ad
                        labore quia error, aperiam vero.
                    </p>
                </div>
            </Section>
            <Section>
                <div className={styles.row}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorem!</p>
                </div>
            </Section>
            <Section>
                <div className={styles.row}>
                    <h2>Blog</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorem!</p>
                </div>
            </Section>
        </Page>
    )
}

export default Home
