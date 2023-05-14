import _ from "lodash";

export function paginate(items, pageNamber, pageSize) {
    const startIndex = (pageNamber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}
