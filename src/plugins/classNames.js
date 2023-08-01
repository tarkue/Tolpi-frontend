export default function classNames() {
    var args = []
    for (var key in arguments) {
        args.push(arguments[key])
    }
    return args.join(' ')
}