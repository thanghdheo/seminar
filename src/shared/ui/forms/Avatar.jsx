import _ from "lodash"

const Avatar = ({ src }) => {
    return <>
        {
            src ? <img
                className="inline-block h-52 w-52 "
                src={src}
                alt=""
            /> :
                <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
        }
    </>
}

const AvatarText = ({ txt }) => {
    return <>
        <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
            <span className="text-xl font-medium leading-none text-white">{txt ? txt : 'A'}</span>
        </span>
    </>

}

const AvatarStatus = ({ src, type }) => {
    switch (type) {
        case 'online':
            return <>
                {src ?
                    <span className="inline-block relative">
                        <img
                            className="h-16 w-16 rounded-full"
                            src={src}
                            alt=""
                        />
                        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400" />
                    </span>
                    :
                    <span className="inline-block relative">
                        <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>

                        <span className="absolute bottom-1 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400" />
                    </span>
                }
            </>
        case 'offline':
            return <>
                {src ?
                    <span className="inline-block relative">
                        <img
                            className="h-16 w-16 rounded-full"
                            src={src}
                            alt=""
                        />
                        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400" />
                    </span>
                    :
                    <span className="inline-block relative">
                        <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>

                        <span className="absolute bottom-1 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-red-400" />
                    </span>
                }
            </>
        default:
            return <>
                {src ?
                    <span className="inline-block relative">
                        <img
                            className="h-16 w-16 rounded-full"
                            src={src}
                            alt=""
                        />
                        <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-gray-300" />
                    </span>
                    :
                    <span className="inline-block relative">
                        <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>

                        <span className="absolute bottom-1 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-gray-300" />
                    </span>
                }
            </>
    }

}

const AvatarGroup = ({ src, maxCount }) => {
    return <>
        {
            maxCount && _.size(src) > maxCount ?
                <div className="flex -space-x-6 overflow-hidden">
                    {
                        _.map(src, (item, index) => {
                            return <>
                                {
                                    index < maxCount &&
                                    <Avatar src={item} />
                                }
                                {
                                    index === maxCount &&
                                    <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
                                        <span className="text-xl font-medium leading-none text-white">+{_.size(src) - index}</span>
                                    </span>
                                }
                            </>
                        })
                    }
                </div> :
                <div className="flex -space-x-6 overflow-hidden">
                    {
                        _.map(src, (item, index) => {
                            return <>
                                <Avatar key={index} src={item} />
                            </>
                        })
                    }
                </div>
        }

    </>
}

export { Avatar, AvatarText, AvatarStatus, AvatarGroup };