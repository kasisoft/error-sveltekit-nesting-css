<script lang="ts">
    interface Props {
        title: string,
    }
    const { title }: Props = $props();
</script>

<div>
    <p>{title}</p>
</div>
