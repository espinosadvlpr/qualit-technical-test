export function CredentialsForm() {
    return (
        <form className="w-full max-w-md mx-auto mt-8 text-xl text-black font-semibold flex flex-col">
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-1">Example</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    required
                    className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-bold mb-1">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="******"
                    required
                    className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="w-full h-12 px-6 mb-4 mt-4 text-lg text-white transition-colors duration-150 bg-violet-600 rounded-lg focus:shadow-outline hover:bg-violet-300"
            >
                LOG IN
            </button>
        </form>
    );
}