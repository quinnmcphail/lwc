function update(oldVnode: VNode, vnode: VNode) {
    const { cache } = vnode;
    if (cache) {
        return;
    }

    let oldProps = oldVnode.data.props;
    let props = vnode.data.props;

    if (!oldProps && !props) {
        return;
    }
    if (oldProps === props) {
        return;
    }

    oldProps = oldProps || {};
    props = props || {};

    let key: string, cur: any, old: any;
    const { elm } = vnode;

    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];

        if (old !== cur) {
            if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
                // only touching the dom if the prop really changes.
                elm[key] = cur;
            }
        }
    }
}

export default {
    create: update,
    update,
};