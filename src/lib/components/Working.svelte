<section>
    <div>
        <p>Yellow</p>
    </div>
    <div>
        <p>Green</p>
    </div>
</section>

<style lang="postcss">

    section {

        > div:first-of-type {
            background-color: yellow;
        }

        > div:last-of-type {
            background-color: green;
        }

    }

</style>