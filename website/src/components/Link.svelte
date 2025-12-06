<script>
    import { navigate } from "../lib/router.js";
    export let to = "/";
    export let className = "";

    function handleClick(e) {
        e.preventDefault();
        navigate(to);
        if ($$props.onClick) $$props.onClick(e);
    }
</script>

<a href={to} class={className} on:click={handleClick}>
    <slot />
</a>
